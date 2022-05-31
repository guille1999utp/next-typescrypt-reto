export type Select = {position:{ name:String|any, value:string }} ;

export interface Position {
    manager:        Developer;
    developer:      Developer;
    "tech-lead":    Developer;
    "scrum-master": Developer;
}

export interface Developer {
    description:   string;
    "data-needed": DataNeeded[];
}

export interface DataNeeded {
    type:  Type;
    id:    string;
    label: string;
}

export enum Type {
    Checkbox = "checkbox",
    Email = "email",
    Text = "text",
}