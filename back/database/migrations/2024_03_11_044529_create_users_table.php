<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('nombre');
            $table->string('apellido');
            $table->string('email')->unique();
            $table->string('password');
            $table->date('fecha_nacimiento')->nullable();
            $table->enum('estado', ['activo', 'inactivo'])->default('activo');
            $table->unsignedBigInteger('id_rol');
            $table->foreign('id_rol')->references('id')->on('roles')->default(1);
            $table->dateTime('fecha_creacion')->useCurrent();
            $table->dateTime('fecha_modificacion')->nullable();
            $table->string('usuario_creacion')->nullable();
            $table->string('usuario_modificacion')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('users');
    }
};
