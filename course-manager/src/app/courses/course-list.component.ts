import { Component, OnInit } from "@angular/core";
import { Course } from "./course";

@Component({
    selector: 'app-course-list',
    templateUrl: './course-list.component.html'
})
export class CourseListComponent implements OnInit{ 

    courses: Course[] = [];
    
    ngOnInit(): void{
        this.courses =[
           {
            id: 1,
            name: 'Angular: Forms',
            imageUrl:'/assets/imagens/forms.png',
            price: 99.99,
            code: 'XPS-8796',
            duration: 120,
            rating: 4.5,
            releaseDate: 'Julho, 10, 2021'
            },
            {
            id: 2,
            name: 'Angular: HTTP',
            imageUrl:'/assets/imagens/http.png',
            price: 45.99,
            code: 'LKL-1094',
            duration: 88,
            rating: 4,
            releaseDate: 'Julho, 10, 2021'
            },
        ]
    }
}