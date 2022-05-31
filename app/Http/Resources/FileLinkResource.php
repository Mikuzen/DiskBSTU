<?php

namespace App\Http\Resources;

use App\Models\FileLink;
use Illuminate\Http\Resources\Json\JsonResource;

class FileLinkResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'link' => $this->link,
        ];
    }
}
