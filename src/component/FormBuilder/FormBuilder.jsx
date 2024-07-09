import { useState } from 'react';
import FormFeild from './FormFeild';
import TitleCard from './TitleCard';
import { PlusCircleTwoTone } from '@ant-design/icons';
import { Input, Tabs } from 'antd';

export default function FormBuilder() {
  const questionObject = {
    label: '',
    description: '',
    inputType: 'text',
  };
  const [title, setTitle] = useState({
    name: 'Sample Title',
    description:
      "Welcome to GatherHub, where collecting and managing data is made easy. Whether you're an educator, nonprofit, or event organizer, our intuitive form builder empowers you to gather valuable insights and streamline your operations.",
  });
  const [Questions, setQuestions] = useState([]);
  const alignValue = 'center';

  const addQuestion = () => {
    setQuestions([...Questions, questionObject]);
  };

  const items = [
    {
      key: '1',
      label: 'Form Builder',
      children: (
        <>
          <TitleCard title={title} setTitle={setTitle} />
          <hr className="mt-5 mb-3" />
          <div className="">
            {Questions.map((question, i) => {
              return (
                <div key={i}>
                  <div className="flex justify-between">
                    <p className="text-gray-700 font-bold">Question {i + 1}</p>
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
        </>
      ),
    },
    {
      key: 'Preview',
      label: 'Preview',
      children: (
        <>
          <div>
            <div className="h-60 w-full bg-[url('assets/img/sample_title_bg.svg')]"></div>
            <h3 className="text-2xl font-bold mt-5">{title['name']}</h3>
            <p className="mt-3 font-medium text-gray-500">
              {title['description']}
            </p>
            <div className="my-5">
              {Questions.map(question => {
                return (
                  <div className="border rounded-lg p-3 mb-5">
                    <p className="font-medium text-lg mb-2">
                      {question.label}:
                    </p>
                    <p className="text-gray-700 mb-4">{question.description}</p>
                    <Input type={question.inputType} className="w-64" />
                  </div>
                );
              })}
            </div>
          </div>
        </>
      ),
    },
  ];

  return (
    <div className="min-h-[calc(100vh-64px)] container lg:w-[800px] mx-auto relative">
      <div className="w-full py-5 px-4 md:px-2 min-h-[calc(100vh-70px)]">
        <Tabs
          defaultActiveKey="1"
          items={items}
          // onChange={onChange}
          indicator={{
            size: origin => origin - 20,
            align: alignValue,
          }}
        />
      </div>
    </div>
  );
}
