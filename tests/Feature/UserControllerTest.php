<?php

namespace Tests\Feature;

use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Laravel\Sanctum\Sanctum;
use Tests\TestCase;

class UserControllerTest extends TestCase
{
    public function test_api_get_all_users()
    {
        $this->apiToken();
        $this->getJson('api/V1/users')
            ->assertStatus(200)
            ->assertJsonStructure([
                'data' => [
                    '*' => [
                        'id',
                        'name',
                        'email',
                        'admin',
                        'password',
                        'created_at',
                        'files'
                    ]
                ]
            ]);
    }

    public function test_api_add_new_user()
    {
        $this->apiToken();
        $password = Str::random(10);

        $user = [
            'name' => $this->faker->name,
            'email' => $this->faker->email,
            'admin' => false,
            'password' => $password,
            'password_confirmation' => $password,
        ];

        $this->postJson('api/V1/users', $user)
            ->assertStatus(201)
            ->assertJsonStructure([
                'data' => [
                    'id',
                    'name',
                    'email',
                    'admin',
                    'password',
                    'created_at',
                    'files'
                ]
            ]);
        $this->assertDatabaseHas('users', [
            'name' => $user['name'],
            'email' => $user['email'],
            'admin' => $user['admin'],
        ]);
    }

    public function test_api_show_user()
    {
        $this->apiToken();
        $password = Hash::make(Str::random(10));

        $user = User::create([
            'name' => $this->faker->name,
            'email' => $this->faker->email,
            'admin' => false,
            'password' => $password,
            'password_confirmation' => $password,
        ]);

        $this->getJson('/api/V1/users/' . $user->id)
            ->assertOk()
            ->assertExactJson([
                'data' => [
                    'id' => $user->id,
                    'name' => $user->name,
                    'email' => $user->email,
                    'admin' => (integer)$user->admin,
                    'password' => $user->password,
                    'created_at' => $user->created_at,
                    'files' => $user->files,
                ]
            ]);
    }

    public function test_api_update_user()
    {
        $this->apiToken();
        $password = Hash::make(Str::random(10));

        $user = User::create([
            'name' => $this->faker->name,
            'email' => $this->faker->email,
            'admin' => false,
            'password' => $password,
            'password_confirmation' => $password,
        ]);

        $updateData = [
            'name' => $this->faker->name,
            'email' => $this->faker->email,
            'admin' => true,
        ];

        $this->putJson('/api/V1/users/' . $user->id, [
            'name' => $updateData['name'],
            'email' => $updateData['email'],
            'admin' => $updateData['admin'],
        ])
            ->assertOk()
            ->assertExactJson([
                'data' => [
                    'id' => $user->id,
                    'name' => $updateData['name'],
                    'email' => $updateData['email'],
                    'admin' => $updateData['admin'],
                    'password' => $user->password,
                    'created_at' => $user->created_at,
                    'files' => $user->files,
                ]
            ]);
    }

    public function test_api_destroy_user()
    {
        $this->apiToken();
        $password = Hash::make(Str::random(10));

        $userData = [
            'name' => $this->faker->name,
            'email' => $this->faker->email,
            'password' => $password,
            'password_confirmation' => $password,
        ];
        $user = User::create($userData);

        unset($userData['password_confirmation']);

        $this->deleteJson('/api/V1/users/' . $user->id)
            ->assertStatus(204);

        $this->assertDatabaseMissing('users', $userData);
    }

    public function test_api_show_missing_user()
    {
        $this->apiToken();
        $this->getJson('api/V1/users/0')
            ->assertNotFound()
            ->assertJsonStructure(['exception']);
    }

    public function test_api_update_missing_user()
    {
        $this->apiToken();
        $updateData = [
            'name' => $this->faker->name,
            'email' => $this->faker->email,
            'admin' => true,
        ];

        $this->putJson('api/V1/users/0', [
            'name' => $updateData['name'],
            'email' => $updateData['email'],
            'admin' => $updateData['admin'],
        ])
            ->assertNotFound()
            ->assertJsonStructure(['exception']);
    }

    public function test_api_destroy_missing_user()
    {
        $this->apiToken();

        $this->deleteJson('api/V1/users/0')
            ->assertNotFound()
            ->assertJsonStructure(['exception']);
    }

    public function test_api_store_missing_data()
    {
        $this->apiToken();
        $user = [
            'name' => $this->faker->name,
            'email' => $this->faker->email,
            'admin' => false,
            //missing password and password_confirmation
        ];

        $this->postJson('/api/V1/users', [
            'name' => $user['name'],
            'email' => $user['email'],
            'admin' => $user['admin'],
        ])
            ->assertStatus(422)
            ->assertJsonStructure(['errors']);
    }

    public function test_api_store_not_valid_email_user()
    {
        $this->apiToken();
        $password = Str::random(10);

        $user = [
            'name' => $this->faker->name,
            'email' => $this->faker->text,
            'admin' => false,
            'password' => $password,
            'password_confirmation' => $password,
        ];

        $this->postJson('api/V1/users', $user)
            ->assertStatus(422)
            ->assertJsonStructure(['errors']);
    }

    public function test_api_store_password_less_than_min()
    {
        $this->apiToken();
        $password = Str::random(6);

        $user = [
            'name' => $this->faker->name,
            'email' => $this->faker->text,
            'admin' => false,
            'password' => $password,
            'password_confirmation' => $password,
        ];

        $this->postJson('api/V1/users', $user)
            ->assertStatus(422)
            ->assertJsonStructure(['errors']);
    }

    public function test_api_store_password_not_confirmation()
    {
        $this->apiToken();

        $password = Str::random(10);

        $user = [
            'name' => $this->faker->name,
            'email' => $this->faker->text,
            'admin' => false,
            'password' => $password,
        ];

        $this->postJson('api/V1/users', $user)
            ->assertStatus(422)
            ->assertJsonStructure(['errors']);
    }

    public function test_api_update_missing_data()
    {
        $this->apiToken();

        $password = Hash::make(Str::random(10));

        $user = User::create([
            'name' => $this->faker->name,
            'email' => $this->faker->email,
            'admin' => false,
            'password' => $password,
            'password_confirmation' => $password,
        ]);


        $updateData = [
            'name' => $this->faker->name,
            'email' => $this->faker->email,
            'admin' => 3,
        ];

        $this->putJson('/api/V1/users/' . $user->id, [
            'name' => $updateData['name'],
            'email' => $updateData['email'],
            'admin' => $updateData['admin'],
        ])
            ->assertStatus(422)
            ->assertJsonStructure(['errors']);
    }

    public function test_api_trying_delete_admin()
    {
        $this->apiToken();

        $password = Hash::make(Str::random(10));

        $userData = [
            'name' => $this->faker->name,
            'email' => $this->faker->email,
            'admin' => true,
            'password' => $password,
            'password_confirmation' => $password,
        ];
        $user = User::create($userData);

        unset($userData['password_confirmation']);

        $this->deleteJson('/api/V1/users/' . $user->id)
            ->assertStatus(400);

        $this->assertDatabaseHas('users', $userData);
    }

    private function apiToken()
    {
        Sanctum::actingAs(
            User::factory()->create(),
            ['*']
        );
    }
}
