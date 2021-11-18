import React, { useState } from "react";
import { ReactSortable } from "react-sortablejs";
import styled from "styled-components";
import "./styles.css";
import { classes, killOrder, sedOrder } from './data.js'
import { Dropdown } from "./Dropdown";

const StyledBlockWrapper = styled.div`
  position: relative;
  background: white;
  text-align: center;
  padding: 20px;
  margin-bottom: 10px;
  border: 1px solid lightgray;
  border-radius: 4px;
  cursor: move;
  &:hover {
    //background: #eeeeee;
  }
`;

const sortableOptions = {
  animation: 150,
  fallbackOnBody: true,
  swapThreshold: 0.65,
  ghostClass: "ghost",
  group: "shared"
};

const InlineEdit = ({ value, setValue }) => {
  const [editingValue, setEditingValue] = useState(value);
  
  const onChange = (event) => setEditingValue(event.target.value);
  
  const onKeyDown = (event) => {
    if (event.key === "Enter" || event.key === "Escape") {
      event.target.blur();
    }
  }
  
  const onBlur = (event) => {
    if (event.target.value.trim() === "") {
      setEditingValue(value);
    } else {
      setValue(event.target.value)
    }
  }

  return (
    <input
      type="text"
      aria-label="Field name"
      value={editingValue}
      onChange={onChange}
      onKeyDown={onKeyDown}
      onBlur={onBlur}
    />
  );
};



export default function App() {
  const [value, setValue] = useState()
  const [blocks, setBlocks] = useState([
    {
      id: 1,
      content: "Team 1",
      parent_id: null,
      type: "container",
      children: [
        {
          id: 2,
          content: classes[0],
          name: <InlineEdit value={value} setValue={setValue} />,
          width: 3,
          type: "text",
          parent_id: 1
        },
        {
          id: 3,
          content: classes[1],
          name: <InlineEdit value={value} setValue={setValue} />,
          width: 3,
          type: "text",
          parent_id: 1
        },
        {
          id: 4,
          content: classes[2],
          name: <InlineEdit value={value} setValue={setValue} />,
          width: 3,
          type: "text",
          parent_id: 1
        },
        {
          id: 5,
          content: classes[3],
          name: <InlineEdit value={value} setValue={setValue} />,
          width: 3,
          type: "text",
          parent_id: 1
        },
        {
          id: 6,
          content: classes[4],
          name: <InlineEdit value={value} setValue={setValue} />,
          width: 3,
          type: "text",
          parent_id: 1
        },
        {
          id: 7,
          content: classes[5],
          name: <InlineEdit value={value} setValue={setValue} />,
          width: 3,
          type: "text",
          parent_id: 1
        },
      ]
    },
    
    {
      id: 8,
      content: "Team 2",
      parent_id: null,
      type: "container",
      children: [
        {
          id: 9,
          content:classes[0],
          name: <InlineEdit value={value} setValue={setValue} />,
          width: 2,
          type: "text",
          parent_id: 8
        },
        {
          id: 10,
          content: classes[1],
          name: <InlineEdit value={value} setValue={setValue} />,
          width: 2,
          type: "text",
          parent_id: 8
        },
        {
          id: 11,
          content: classes[2],
          name: <InlineEdit value={value} setValue={setValue} />,
          width: 2,
          type: "text",
          parent_id: 8
        },
        {
          id: 12,
          content: classes[3],
          name: <InlineEdit value={value} setValue={setValue} />,
          width: 3,
          type: "text",
          parent_id: 8
        },
        {
          id: 13,
          content: classes[4],
          name: <InlineEdit value={value} setValue={setValue} />,
          width: 3,
          type: "text",
          parent_id: 8
        },
        {
          id: 14,
          content: classes[5],
          name: <InlineEdit value={value} setValue={setValue} />,
          width: 3,
          type: "text",
          parent_id: 8
        },
      ]
    },
    {
      id: 15,
      content: "Team 3",
      parent_id: null,
      type: "container",
      children: [
        {
          id: 16,
          content: classes[0],
          name: <InlineEdit value={value} setValue={setValue} />,
          width: 3,
          type: "text",
          parent_id: 15
        },
        {
          id: 17,
          content: classes[1],
          name: <InlineEdit value={value} setValue={setValue} />,
          width: 3,
          type: "text",
          parent_id: 15
        },
        {
          id: 18,
          content: classes[2],
          name: <InlineEdit value={value} setValue={setValue} />,
          width: 3,
          type: "text",
          parent_id: 15
        },
        {
          id: 19,
          content: classes[3],
          name: <InlineEdit value={value} setValue={setValue} />,
          width: 3,
          type: "text",
          parent_id: 15
        },
        {
          id: 20,
          content: classes[4],
          name: <InlineEdit value={value} setValue={setValue} />,
          width: 3,
          type: "text",
          parent_id: 15
        },
        {
          id: 21,
          content: classes[5],
          name: <InlineEdit value={value} setValue={setValue} />,
          width: 3,
          type: "text",
          parent_id: 15
        },
      ]
    },
  ]);

  return (
    <>
    <div className="row">
      <ReactSortable list={blocks} setList={setBlocks} {...sortableOptions}>
        {blocks.map((block, blockIndex) => (
          <div className="column">
          <BlockWrapper
            key={block.id}
            block={block}
            blockIndex={[blockIndex]}
            setBlocks={setBlocks}
          />
          </div>
        ))}
      </ReactSortable>
    </div>
    <div className="info">
      {sedOrder} <br></br>

      {killOrder}
    </div>
    <div className="bor">
        borbor
    </div>
    </>
  );
}
function Container({ block, blockIndex, setBlocks }) {
  return (
    <>
      <ReactSortable
        key={block.id}
        list={block.children}
        setList={(currentList) => {
          setBlocks((sourceList) => {
            const tempList = [...sourceList];
            const _blockIndex = [...blockIndex];
            const lastIndex = _blockIndex.pop();
            const lastArr = _blockIndex.reduce(
              (arr, i) => arr[i]["children"],
              tempList
            );
            console.log(lastIndex);
            lastArr[lastIndex]["children"] = currentList;
            return tempList;
          });
        }}
        {...sortableOptions}
      >
        {block.children &&
          block.children.map((childBlock, index) => {
            return (
              <BlockWrapper
                key={childBlock.id}
                block={childBlock}
                blockIndex={[...blockIndex, index]}
                setBlocks={setBlocks}
              />
            );
          })}
      </ReactSortable>
    </>
  );
}
function BlockWrapper({ block, blockIndex, setBlocks }) {
  // console.log(block);
  if (!block) return null;
  if (block.type === "container") {
    return (
      <StyledBlockWrapper className="block">
          {block.content}
        <Container
          block={block}
          setBlocks={setBlocks}
          blockIndex={blockIndex}
        />
      </StyledBlockWrapper>
    );
  } else {
    return (
      <StyledBlockWrapper className="block">
        <Dropdown options={classes}/>
        : {block.name}
      </StyledBlockWrapper>
    );
  }
}
