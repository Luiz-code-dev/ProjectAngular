import { Component, OnInit } from "@angular/core";
import { Course } from "./course";
import { courseService } from "./course.service";

@Component({
    selector: 'app-course-list',
    templateUrl: './course-list.component.html'
})
export class CourseListComponent implements OnInit{ 

    filteredCourses: Course[] = [];

    _courses: Course[] = [];

    _filterBy: String;

    constructor(private courseService: courseService){

    }
    
    ngOnInit(): void{
        this._courses = this.courseService.retrieveAll();
        this.filteredCourses = this._courses;
    }


    set filter(value: string) {
        this._filterBy = value;

        this.filteredCourses = this._courses.filter((course: Course) => course.name.toLowerCase().indexOf(this._filterBy.toLowerCase()) > -1); 
    }


}