export interface User {
    id : string;
    email? : string;
    post? : IPost[];
    follower : string[];
    reposts? : IPost[];
    image : string;
    verified : boolean;
}

export interface IPost {
    index : string;
    message : string;
    date : Date;
    comment? : IComment[];
    image? : string;
    like : number;
    userId: string;
    delete : boolean;
}

export interface IComment {
    index : string;
    name : string;
    message : string;
    date : Date;
    delete : boolean;
    postIndex: string;
}

export interface Database  {
    users: User[];
    post: IPost[];
    comment: IComment[];
}

let database: Database = {
    users: [{id: "1", email: "haily@mail.com", follower:["hailey"], image: " ", verified: true}],
    post : [{index: "1", message: "hi", date: new Date(), like: 0, userId: "mai123", delete: false}],
    comment: [{index:"1", name:"Kailin", message:"Hi", date: new Date(), delete: false, postIndex:"1"}]
}