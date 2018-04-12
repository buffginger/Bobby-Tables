<?php

//namespace App\Http\Controllers;

//use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;

class UpdateController extends Controller
{
    
    /*public function updateName($selectedID, $newUserName)
    {
        DB::table('users')
            ->where('id', $selectedID)
            ->update(['name' => $newUserName]);
    }*/

    /**
     * Log the user out (Invalidate the token).
     *
     * @return \Illuminate\Http\JsonResponse
    */
    public function updateName($request)
    {
        $inputArray = request(['id', 'name']);

        DB::table('users')
            ->where('id', $inputArray[0])
            ->update(['name' => $inputArray[1]]);

        return response()->json(['message' => 'Successfully logged out']);
    }

 
}