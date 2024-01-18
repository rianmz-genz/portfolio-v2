<?php

namespace App\Http\Controllers;

use App\Http\Resources\ProjectCollection;
use App\Http\Resources\ProjectResource;
use App\Models\Project;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class ProjectController extends Controller
{
    public function index() {
        $projects = Project::all();
        return Inertia::render('Projects/Page', [
            'projects' => new ProjectCollection($projects)
        ]);
    }

    public function create() {
        $projects = Project::all();
        return Inertia::render('Projects/Create', [
            'createdData' => null,
            'projects' => new ProjectCollection($projects)
        ]);
    }

    public function store(Request $request) {
        $request->validate([
            'name' => ['required'],
            'description' => ['required'],
            'image' => ['required'],
            'repo_url' => ['required'],
            'demo_url' => ['required'],
        ]);
        $path = $request['image']->store('images/projects', 'public');
        $uploadedImage = url('storage/' . $path);
        Project::create([
            'name' => $request['name'],
            'description' => $request['description'],
            'image' => $uploadedImage,
            'repo_url' => $request['repo_url'],
            'demo_url' => $request['demo_url'],
        ]);
        return Redirect::route('project.create')->with('success', 'Success To Created New Project');
    }

    public function delete($id) {
        $project = Project::findOrFail($id);
        $project->delete();
        return Redirect::route('project.create');
    }
}
