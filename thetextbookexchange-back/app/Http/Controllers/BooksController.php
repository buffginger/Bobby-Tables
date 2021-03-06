<?php
 
namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller; 
use Illuminate\Http\Request;
use App\Book;
use Illuminate\Support\Facades\Log;

 
class BooksController extends Controller
{
 
    public function index()
    {
        return Book::all();
    }
 
    public function show(Book $book)
    {
        return $book;
    }

    public function query(Request $request)
    {
        
    }

    public function searchTitle(Request $request){

        $results = DB::table('books')->where('title', 'like', '%'.$request['titleName'].'%')->get();
        Log::info($results);

        return response()->json($results, 201);
    }
    
    public function searchISBN(Request $request){
        $results = DB::table('books')->where('isbn', 'like', '%'.$request['isbn'].'%')->get();
        return response()->json($results, 201);
    }

    public function searchAuthor(Request $request){
        $results = DB::table('books')->where('author', 'like', '%'.$request['author'].'%')->get();
        return response()->json($results, 201);
    }

    public function store(Request $request)
    {
        Log::info($request);
        $user = auth()->user();

        $book = DB::table('books')->insert([
        'title' => $request['title'], 
        'author' => $request['author'],
        'isbn' => $request['isbn'],
        'edition' => $request['edition'],
        'subject' => $request['subject'],
        'condition' => $request['condition'],
        'price' => $request['price'],
        'negotiable' => $request['negotiable'],
        'description' => $request['description'],
        'image' => $request['image'],
        'seller' => $user['id']
    ]);
 
        return response()->json($book, 201);
    }

    public function mybooks(Request $request) 
    {
        $user = auth()->user(); 
        Log::info($user['id']);

        $results = DB::table('books')->where('seller', $user['id'])->get();
        return response()->json($results, 201);

    }
 
    public function update(Request $request, Book $book)
    {
        $book->update($request->all());
 
        return response()->json($book, 200);
    }
 
    public function delete(Book $book)
    {
        $book->delete();
 
        return response()->json(null, 204);
    }
 
}