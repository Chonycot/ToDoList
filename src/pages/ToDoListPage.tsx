import React from "react";
import { Header } from "../components/Header/Header";
import { Form } from "../components/Form/Form";
import { ToDoList } from "../components/ToDoList/ToDoList";

export const ToDoListPage = () => {
    return (
        <>

            <Header />

            <div className="form-wrapper">
                <Form />
            </div>
            <ToDoList />
        </>
        
    )
}