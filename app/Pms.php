<?php namespace App;

use Illuminate\Database\Eloquent\Model;

class Pms extends Model {

	protected $table = 'project';

	protected $fillable = ['name'];

	public $timestamps = false;

}
