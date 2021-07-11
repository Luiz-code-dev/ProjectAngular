import { Injectable } from "@angular/core";
import { Course } from "./course";



@Injectable({
    providedIn: 'root'
})
export class courseService {
    

    retrieveAll(): Course[] {
        return COURSES;
    }

    retrieveById(id: number): Course{
        return Course.find((courseIterator: Course) => courseIterator.id === id);
    }

    save(course: Course): void {
        if (course.id) { 
            const index = COURSES.findIndex((courseIterator: Course) => courseIterator.id === course.id)
            COURSES[index] = course;
        }
    }

}

    var COURSES: Course[] = [
    {
        id: 1,
        name: 'Angular: CLI',
        releaseDate: 'Julho 10, 2021',
        description: 'Neste curso, os alunos irão obter um grande conhecimento nos principais recursos do CLI.',
        duration: 120,
        code: 'XLF-1212',
        rating: 3,
        price: 12.99,
        imageUrl: '/assets/imagens/cli.png',
    },
    {
        id: 2,
        name: 'Angular: Forms',
        releaseDate: 'Julho 8, 2021',
        description: 'Neste curso, os alunos irão obter um conhecimento aprofundado sobre os recursos disponíveis no módulo de Forms.',
        duration: 80,
        code: 'DWQ-3412',
        rating: 3.5,
        price: 24.99,
        imageUrl: '/assets/imagens/forms.png',
    },
    {
        id: 3,
        name: 'Angular: HTTP',
        releaseDate: 'Julho 11, 2021',
        description: 'Neste curso, os alunos irão obter um conhecimento aprofundado sobre os recursos disponíveis no módulo de HTTP.',
        duration: 80,
        code: 'QPL-0913',
        rating: 4.0,
        price: 36.99,
        imageUrl: '/assets/imagens/http.png',
    },
    {
        id: 4,
        name: 'Angular: Router',
        releaseDate: 'Julho 12, 2021',
        description: 'Neste curso, os alunos irão obter um conhecimento aprofundado sobre os recursos disponíveis no módulo de Router.',
        duration: 80,
        code: 'OHP-1095',
        rating: 4.5,
        price: 46.99,
        imageUrl: '/assets/imagens/router.png',
    },
    {
        id: 5,
        name: 'Angular: Animations',
        releaseDate: 'Julho 13, 2021',
        description: 'Neste curso, os alunos irão obter um conhecimento aprofundado sobre os recursos disponíveis sobre Animation.',
        duration: 80,
        code: 'PWY-9381',
        rating: 5,
        price: 56.99,
        imageUrl: '/assets/imagens/animations.png',
    }
];
