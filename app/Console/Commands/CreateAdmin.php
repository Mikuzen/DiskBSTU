<?php

namespace App\Console\Commands;

use App\Models\User;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Hash;

class CreateAdmin extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'admin:create {name : user\'s name} {email : user\'s email} {password : user\'s password}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Создает пользователя с правами администратора.';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return void
     */
    public function handle()
    {
        $password = Hash::make($this->argument('password'));

        User::create([
            'name' => $this->argument('name'),
            'email' => $this->argument('email'),
            'admin' => true,
            'password' =>$password,
            'password_confirmation' =>$password,
        ]);

        return $this->info('Администратор был создан');
    }
}
