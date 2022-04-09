import React, {useRef} from 'react';
import './styles.css';

//function component의 props 들에 대한 타입을 지정해주기 위해서 interface를 정의
interface Props{
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    //handleAdd의 type은 function that returns nothing 이다.
    handleAdd: (e: React.FormEvent) => void;
}

const InputField: React.FC<Props> = ({todo, setTodo, handleAdd}) => {
    
    const inputRef = useRef<HTMLInputElement>(null);
    
    return (<form className='input' onSubmit={(e) => 
                {handleAdd(e)
                // shift the focus of input box
                //input box에 대한 reference를 불러와서 blur 처리 할 때 사용한다.
                inputRef.current?.blur()
            }}>
        <input 
            ref={inputRef}
            type="input" 
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            placeholder='Enter a task' className='input_box'/>
        <button className='input_submit' type='submit'>Go</button>
    </form> 
    )
}

export default InputField 