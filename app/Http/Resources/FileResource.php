<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class FileResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'user_id' => $this->user_id,
            'src' => $this->src,
            'ext' => $this->ext,
            'title' => $this->title,
            'size' => $this->size,
            'type' => $this->type,
            'private' => $this->private,
            'deleted_at' => $this->deleted_at,
            'link' => new FileLinkResource($this->link),
        ];
    }
}
