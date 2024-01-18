<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Project extends Model
{
    use HasFactory;
    protected $table = 'projects';
    protected $primaryKey = 'id';
    protected $keyType = 'int';
    public $timestamps = true;
    public  $incrementing = true;
    protected $fillable = [
        'name',
        'description',
        'image',
        'demo_url',
        'repo_url'
    ];

    public function skills(): HasMany {
        return $this->hasMany(Skill::class, 'project_id', 'id');
    }
}
