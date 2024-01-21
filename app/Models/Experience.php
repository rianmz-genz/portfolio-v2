<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Experience extends Model
{
    use HasFactory;
    protected $table = 'experiences';
    protected $primaryKey = 'id';
    protected $keyType = 'int';
    public $timestamps = true;
    public  $incrementing = true;
    protected $fillable = [
        'title',
        'job',
        'time',
        'type',
    ];

    public function detail(): HasMany
    {
        return $this->hasMany(ExperienceDetail::class,'experience_id', 'id');
    }
}
