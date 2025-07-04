import { useForm } from 'react-hook-form';

import style from './DynamicForm.module.css';

const DynamicForm = () => {
    const { register, watch, reset, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        reset();
    }

    const checkFirstFild = watch('text', "");

    return (
        <div className={style.wrap}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="text">First Field</label>
                <input {...register("text", { required: "Поле должно быть заполнено", minLength: { value: 5, message: "Количество символов должно быть больше 5" } })} type="text" name='text' id='text' placeholder='Enter at least five Symbols'/>
                {errors.text && <p style={{ color: "red" }}>{errors.text.message}</p>}
                {checkFirstFild.length >= 5 && (
                    <div>                        
                        <label htmlFor="text2">Second Field</label>
                        <input {...register("text2", { required: "Поле должно быть заполнено", minLength: { value: 5, message: "Количество символов должно быть больше 5" } })} type="text" name='text2' id='text2' placeholder='Enter at least five Symbols'/>
                        {errors.text2 && <p style={{ color: "red" }}>{errors.text2.message}</p>}
                    </div>
                  )}
              
                <input className={style.btn} type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default DynamicForm;