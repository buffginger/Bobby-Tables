<?php

use Faker\Generator as Faker;

$factory->define(App\Book::class, function (Faker $faker) {
    return [
        'title' => substr($faker->sentence(2), 0, -1),
        'author' => substr($faker->sentence(2), 0, -1),
        'isbn' => $faker->isbn13(),
        'edition' => substr($faker->sentence(2), 0, -1),
        'image' => substr($faker->sentence(2), 0, -1),
        'subject' => substr($faker->sentence(2), 0, -1),
    ];
});
