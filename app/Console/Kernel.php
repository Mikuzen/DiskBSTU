<?php

namespace App\Console;

use App\Models\File;
use Illuminate\Support\Facades\Auth;
use Illuminate\Console\Scheduling\Schedule;
use Illuminate\Foundation\Console\Kernel as ConsoleKernel;
use Illuminate\Support\Facades\Storage;

class Kernel extends ConsoleKernel
{
    /**
     * Define the application's command schedule.
     *
     * @param  \Illuminate\Console\Scheduling\Schedule  $schedule
     * @return void
     */
    protected function schedule(Schedule $schedule)
    {
        $schedule->call(function (){
            $files = File::onlyTrashed()->get();
            foreach ($files as $file) {
                $url = 'files/' . $file->user_id . '/' . $file->folder . '/';
                if ($file->type == 'image'){
                    Storage::delete($url . 'resize/' . $file->src);
                }
                Storage::disk('public')->delete($url . $file->src);
                $file->forceDelete();
            }
        })->monthly()->timezone('Europe/Moscow');
    }

    /**
     * Register the commands for the application.
     *
     * @return void
     */
    protected function commands()
    {
        $this->load(__DIR__.'/Commands');

        require base_path('routes/console.php');
    }
}
