<?php
 
namespace App\Http\Controllers;
 
use Illuminate\Http\Request;
use App\Book;
 
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
        $results = DB::table('books')->where('title', 'LIKE', $request['titleName'])->get();
        return response()->json($results, 201);
    }
    /*public function searchISBN(Request $request){
        $results = DB::table('books')->where('isbn', 'LIKE', $request)->get();
        return response()->json($results, 201);
    }
    public function searchAuthor(Request $request){
        $results = DB::table('books')->where('author', 'LIKE', $request)->get();
        return response()->json($results, 201);
    }*/

    public function store(Request $request)
    {
        $book = Book::create($request->all());
 
        return response()->json($book, 201);
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