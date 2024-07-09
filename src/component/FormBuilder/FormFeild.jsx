import { DeleteTwoTone } from '@ant-design/icons';
import { Input, Select } from 'antd';
import { useEffect, useRef, useState } from 'react';

export default function FormFeild({
  questions,
  question,
  setQuestions,
  index,
}) {
  const [isActive, setIsActive] = useState(false);
  const [isOnHover, setIsOnHover] = useState(false);
  const questionRef = useRef(null);
  const options = [
    {
      value: 'text',
      label: 'Text Input',
    },
    {
      value: 'number',
      label: 'Integer Input',
    },
  ];
  useEffect(() => {
    document.addEventListener('click', handleClickOutside, false);
    return () => {
      document.removeEventListener('click', handleClickOutside, false);
    };
  }, []);

  const handleClickOutside = event => {
    if (
      event.target.className !== 'ant-select-item-option-content' &&
      event.target.className !== 'ant-select-selection-item'
    ) {
      if (questionRef.current && !questionRef.current.contains(event.target)) {
        setIsActive(false);
      } else {
        setIsActive(true);
      }
    }
  };

  const handleChange = (name, e) => {
    let val = '';
    if (name === 'inputType') {
      val = e;
    } else {
      val = e.target.value;
    }
    let updatedQuestion = {
      ...question,
      [name]: val,
    };
    const updatedQuestions = [
      ...questions.slice(0, index),
      updatedQuestion,
      ...questions.slice(index + 1, questions.length),
    ];
    setQuestions(updatedQuestions);
  };

  const removeQuestion = () => {
    const updatedQuestions = [
      ...questions.slice(0, index),
      ...questions.slice(index + 1, questions.length),
    ];
    setQuestions(updatedQuestions);
  };

  return (
    <div
      onMouseEnter={() => setIsOnHover(true)}
      onMouseLeave={() => setIsOnHover(false)}
      ref={questionRef}
      className={`border rounded-lg p-3 mb-5 relative ${isActive ? 'border-blue-400' : ''}`}
    >
      {isActive ? (
        <div>
          <div className="flex gap-5 justify-between mr-10">
            <div>
              <label className="required font-medium" htmlFor="label">
                Label
              </label>{' '}
              <br />
              <Input
                onChange={e => handleChange('label', e)}
                value={question.label}
                type="text"
                id="label"
              />
            </div>
            <div>
              <label htmlFor="Type" className="font-medium">
                Input type
              </label>{' '}
              <br />
              <Select
                className="InputType"
                onChange={e => handleChange('inputType', e)}
                value={question.inputType}
                defaultValue="text"
                style={{ width: 200 }}
                options={options}
              />
            </div>
          </div>{' '}
          <br />
          <label htmlFor="Description" className="font-medium">
            Description
          </label>{' '}
          <br />
          <Input
            onChange={e => handleChange('description', e)}
            type="text"
            id="Description"
            value={question.description}
          />
        </div>
      ) : (
        <div className="cursor-pointer">
          <div className="flex gap-10 justify-between mr-20">
            <div>
              <p
                className="required text-gray-600 mb-1 font-medium"
                htmlFor="label"
              >
                Label
              </p>
              <p>{question.label}</p>
            </div>
            <div>
              <p className="text-gray-600 mb-1 font-medium" htmlFor="label">
                Input type
              </p>
              <p>Text Input</p>
            </div>
          </div>
          <div className="mt-3">
            <p className="text-gray-600 mb-1 font-medium" htmlFor="label">
              Description
            </p>
            <p>{question.description}</p>
          </div>
        </div>
      )}
      {isOnHover ? (
        <DeleteTwoTone
          onClick={() => removeQuestion()}
          twoToneColor="#ef4444"
          style={{ fontSize: '150%' }}
          className="absolute right-3 top-3 cursor-pointer"
        />
      ) : (
        ''
      )}
    </div>
  );
}
