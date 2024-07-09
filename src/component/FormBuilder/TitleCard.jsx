import { Input } from 'antd';
import TextArea from 'antd/es/input/TextArea';

export default function TitleCard({ title, setTitle }) {
  function handleChange(event) {
    let name = event.target.name;
    let value = event.target.value;
    setTitle({
      ...title,
      [name]: value,
    });
    console.log(title);
  }
  return (
    <div className="TitleCard">
      {/* Cover Image */}
      <div className="relative">
        <div className="h-60 w-full bg-[url('assets/img/sample_title_bg.svg')]"></div>
        <div className="p-2 rounded-full bg-gray-500 hover:bg-gray-400 cursor-pointer absolute bottom-3 right-3">
          <svg
            className=""
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="#334155"
              d="M12 18q2.075 0 3.538-1.462Q17 15.075 17 13q0-2.075-1.462-3.538Q14.075 8 12 8Q9.925 8 8.463 9.462Q7 10.925 7 13q0 2.075 1.463 3.538Q9.925 18 12 18Zm0-2q-1.25 0-2.125-.875T9 13q0-1.25.875-2.125T12 10q1.25 0 2.125.875T15 13q0 1.25-.875 2.125T12 16Zm6-6q.425 0 .712-.288Q19 9.425 19 9t-.288-.713Q18.425 8 18 8t-.712.287Q17 8.575 17 9t.288.712Q17.575 10 18 10ZM4 21q-.825 0-1.412-.587Q2 19.825 2 19V7q0-.825.588-1.412Q3.175 5 4 5h3.15L8.7 3.325q.15-.15.337-.238Q9.225 3 9.425 3h5.15q.2 0 .388.087q.187.088.337.238L16.85 5H20q.825 0 1.413.588Q22 6.175 22 7v12q0 .825-.587 1.413Q20.825 21 20 21Z"
            />
          </svg>
        </div>
      </div>
      {/* Title & Description*/}
      <div className="mt-5">
        <label htmlFor="title" className="text-gray-700 font-bold required">
          Title
        </label>
        <Input
          id="title"
          name="name"
          className="text-[16px] focus:outline-none mb-3"
          value={title.name}
          type="text"
          onChange={e => handleChange(e)}
        />{' '}
        <br />
        <label htmlFor="desc" className="text-gray-700 font-bold">
          Description
        </label>
        <TextArea
          id="desc"
          placeholder="Description"
          name="description"
          value={title.description}
          onChange={e => handleChange(e)}
          autoSize={{ minRows: 3, maxRows: 10 }}
        />
      </div>
    </div>
  );
}
