import Joi from "joi";

const commentValidator = Joi.object({
    name: Joi.string().regex(/^[a-zA-Zа-яА-яёЁіІїЇ]{1,20}$/).required().messages({
        'string.pattern.base': 'Лише букви від 1 до 20'
    }),

    email: Joi.string().regex(/^[a-zA-Zа-яА-яёЁіІїЇ]{1,20}$/).required().messages({
        'string.pattern.base': 'Лише букви від 1 до 20'
    }),

    body: Joi.string().regex(/^[a-zA-Zа-яА-яёЁіІїЇ]{1,100}$/).required().messages({
        'string.pattern.base': 'Лише букви від 1 до 100'
    }),

})

export {
    commentValidator
}