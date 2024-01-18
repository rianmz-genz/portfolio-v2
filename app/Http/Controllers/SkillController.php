<?php

namespace App\Http\Controllers;

use App\Http\Resources\SkillCollection;
use App\Models\Skill;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class SkillController extends Controller
{
    public function index() {
        $skills = Skill::all();
        return Inertia::render('Skill/Page', [
            'skills' => new SkillCollection($skills)
        ]);
    }

    public function create() {
        $skills = Skill::all();
        return Inertia::render('Skill/Create', [
            'skills' => new SkillCollection($skills)
        ]);
    }

    public function store(Request $request) {
        $request->validate([
            'name' => ['required'],
            'image' => ['required'],
        ]);
        $path = $request->image->store('images/skills', 'public');
        $uploadedImage = url('storage/' . $path);
        Skill::create([
            'name' => $request->name,
            'image' => $uploadedImage
        ]);
        return Redirect::route('skill.create')->with('success', 'Success To Created New Project');
        
    }

    public function delete($id) {
        $project = Skill::findOrFail($id);
        $project->delete();
        return Redirect::route('skill.create');
    }
}
