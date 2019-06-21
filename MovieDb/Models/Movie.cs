﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace MovieDataBase.Models
{
    public class Movie
    {
        public Movie ()
        {
            MovieActors = new List<MovieActors>();
        }

        public int MovieId { get; set; }
        [Required, StringLength(80)]
        public string Title { get; set; }
        [Required]
        public int ReleasYear { get; set; }
        public Genre Genre { get; set; }

        public List<MovieActors> MovieActors { get; set; }
    }
}
