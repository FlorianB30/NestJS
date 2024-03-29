import { Injectable } from '@nestjs/common';

interface Post {
  title: string;
  author : string;
  message: string;
}

@Injectable()
export class PostService {
  getPost(): Post {
    return { title: 'Post 1', author: 'Florian Biendine', message: "Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié." };
  }
}
