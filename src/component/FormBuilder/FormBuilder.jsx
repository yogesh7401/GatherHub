import { useState } from 'react';
import FormFeild from './FormFeild';
import TitleCard from './TitleCard';
import { PlusCircleTwoTone } from '@ant-design/icons';

export default function FormBuilder() {
  const questionObject = {
    label: '',
    description: '',
    inputType: 'text',
  };
  const [title, setTitle] = useState({
    name: 'Sample Title',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta id, nam consectetur molestias minus ab ullam dolores consequuntur, officiis dignissimos sequi ipsum et expedita tenetur excepturi. Tempore reiciendis cumque consequatur.',
  });
  const [Questions, setQuestions] = useState([questionObject]);

  const addQuestion = () => {
    setQuestions([...Questions, questionObject]);
  };

  return (
    <div className="min-h-[calc(100vh-64px)] container lg:w-[800px] mx-auto relative">
      <div className="w-full py-5 px-2 min-h-[calc(100vh-70px)]">
        <TitleCard title={title} setTitle={setTitle} />
        <div className="mt-5">
          {Questions.map((question, i) => {
            return (
              <div key={i}>
                <div className="flex justify-between">
                  <p className="text-gray-700">Question {i + 1}</p>
                </div>
                <FormFeild
                  questions={Questions}
                  index={i}
                  question={{ ...question }}
                  setQuestions={setQuestions}
                />
              </div>
            );
          })}
        </div>
        <div
          className="-mt-2 cursor-pointer flex gap-3 bg-blue-600 p-2 rounded-lg text-white"
          onClick={() => addQuestion()}
        >
          <PlusCircleTwoTone style={{ fontSize: '150%' }} />
          <span>Add Question</span>
        </div>
      </div>
    </div>
  );
}
