import { useForm } from "react-hook-form";
import "./Form.css";
import { VALID_DAYS_IN_MONTH } from "../../enum";


export const Form = ({ onSubmit }) => {
    const { register, handleSubmit, formState: { errors, isSubmitSuccessful }, control, getValues } = useForm();
    const currentYear = new Date().getFullYear()
    return (
        <form className="form" onSubmit={handleSubmit((data) => onSubmit(data))}>
            <div className="form__filds">
                <div className="form__item">
                    <label htmlFor="" className={`${errors.day && 'invalid-label'}`}>Day</label>
                    <input type="number"
                        className={`form__input ${errors.day && 'invalid-input'}`}
                        placeholder="DD"
                        control={control}
                        {...register("day", {
                            required: 'This field is required',
                            validate: {
                                invalidDay: (value) => value > 0 && value <= 31,
                                invalidDayInMonth: (value) => value <= VALID_DAYS_IN_MONTH[getValues('month')]
                            }
                        })}
                    />
                    {

                    }

                    {<p className="invalid-feedback">
                        {errors.day?.message || errors.day?.type === 'invalidDay' && 'Must be a valid day'
                            || errors.day?.type === 'invalidDayInMonth' && 'Must be a valid date'}
                    </p>}
                </div>

                <div className="form__item">
                    <label htmlFor="" className={`${errors.month && 'invalid-label'}`}>Month</label>
                    <input type="number"
                        className={`form__input ${errors.month && 'invalid-input'}`}
                        placeholder="MM"
                        control={control}
                        {...register("month", {
                            required: 'This field is required',
                            validate: {
                                invalidValue: (value) => value > 0 && value <= 12
                            }
                        })}

                    />
                    {<p className="invalid-feedback">{errors.month?.message || errors.month?.type === 'invalidValue' && 'Must be a valid month'} </p>}
                </div>

                <div className="form__item">
                    <label htmlFor="" className={`${errors.year && 'invalid-label'}`}>Year</label>
                    <input type="number"
                        className={`form__input ${errors.year && 'invalid-input'}`}
                        placeholder="YYYY"
                        control={control}
                        {...register("year", {
                            required: 'This field is required',
                            validate: {
                                invalidValue: (value) => value <= currentYear
                            }
                        })}
                    />
                    {<p className="invalid-feedback">{errors.year?.message || errors.year?.type === 'invalidValue' && 'Must be in the past'}</p>}
                </div>
            </div>


            <div className="my-12 relative">
                <div className="w-full h-px bg-black">
                    <div className="absolute right-8 top-0 m-[-2.2rem]">
                        <button
                            className={`px-7 py-3.5 ${isSubmitSuccessful ? 'bg-violet-700' : 'bg-black'} rounded-full text-white`}
                            onClick={handleSubmit((data) => onSubmit(data))}
                        >&darr;
                        </button>
                    </div>
                </div>
            </div>
        </form>
    )
}