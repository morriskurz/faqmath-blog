export class Post {
    postId: string;
    title: string;
    content: string;
    author: string;
    createdDate: any;

    constructor() {
        this.title = '';
        this.content = '';
    }
}

export class DummyPost {
    postId: "S1a0d234ASCtig1230S";
    title: "Lorem idom potitas";
    content: "content";
    author: "Morris Kurz";
    createdDate: "01/02/20";
}