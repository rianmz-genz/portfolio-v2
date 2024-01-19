<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Skill extends Model
{
    use HasFactory;
    protected $table = 'skills';
    protected $primaryKey = 'id';
    protected $keyType = 'int';
    public $timestamps = true;
    public  $incrementing = true;
    protected $fillable = [
        'name',
        'image'
    ];

    public function projects(): BelongsToMany
    {
        return $this->belongsToMany(Project::class, 'project_skills', 'skill_id', 'project_id');
    }
}
