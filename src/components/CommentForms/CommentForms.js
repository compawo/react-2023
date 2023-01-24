import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi/dist/joi";

import React from "react";
import {commentService} from "../../services/commentService";
import {commentValidator} from "../../validators/commentValidator";

const CommentForms = ({setComments}) => {
    const {register, handleSubmit, reset, formState: {errors, isValid}} = useForm({
        mode: 'all',
        resolver: joiResolver(commentValidator)
    });


    const submit = async (comment) => {
        const {data} = await commentService.create(comment);
        setComments(prev => [...prev, data])
        reset()
    };

    return (
        <form onSubmit={handleSubmit(submit)}>
            <input type="text" placeholder={'name'} {...register('name')}/>
            {errors.name && <span>{errors.name.message}</span>}
            <input type="text" placeholder={'email'} {...register('email')}/>
            {errors.email && <span>{errors.email.message}</span>}
            <input type="text" placeholder={'body'} {...register('username')}/>
            {errors.username && <span>{errors.body.message}</span>}
            <button disabled={!isValid}>Register</button>
        </form>
    );
};

export {CommentForms};