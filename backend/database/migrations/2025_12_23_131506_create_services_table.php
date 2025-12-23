<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use App\Models\Service;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('services', function (Blueprint $table) {
            $table->id();
            $table->longText("title");
            $table->longText("description");
            $table->longText("photo");
            $table->timestamps();
        });
    
        Service::create([
            'title' => "Boosting below masters",
            "description" => "rank boost desc",
            'photo' => "valami/valami.png"
        ]);

        Service::create([
            'title' => "Boosting above masters",
            "description" => "rank boost desc",
            'photo' => "valami/valami.png"
        ]);

        Service::create([
            'title' => "Coaching",
            "description" => "coaching desc",
            'photo' => "valami/valami.png"
        ]);   
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('services');
    }
};
