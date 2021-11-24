import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react'

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

type ButtonPropsType = DefaultButtonPropsType & {

}

const Button: React.FC<ButtonPropsType> = (
    {
        className,
        ...restProps
    }
) => {
    const finalClassName = `${className}`

    return (
        <button
            className={finalClassName}
            {...restProps}
        />
    )
}

export default Button
