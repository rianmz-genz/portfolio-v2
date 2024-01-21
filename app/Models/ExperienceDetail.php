<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class ExperienceDetail extends Model
{
    use HasFactory;
    protected $table = 'experience_details';
    protected $primaryKey = 'id';
    protected $keyType = 'int';
    public $timestamps = true;
    public  $incrementing = true;
    protected $fillable = [
        'title',
    ];
    protected $casts = [
        'description' => 'array'
    ];

    public function detail(): BelongsTo
    {
        return $this->belongsTo(Experience::class, 'experience_id', 'id');
    }
}
