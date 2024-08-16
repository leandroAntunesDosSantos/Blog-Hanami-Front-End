import './style.css';


export interface InputFormLoginProps {
    type: string;
    id: string;
    name: string;
    required: boolean;
    placeholder: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function InputFormLogin(props: InputFormLoginProps) {
    
    return (
        <input
            id={props.id}
            type={props.type}
            name={props.name}
            required={props.required}
            placeholder={props.placeholder}
            onChange={props.onChange}
        />
        
    );
}
