import React, { use } from "react";
import ToolsCard from "./ToolsCard";

const Tools = ({ toolsPromise }) => {
  const tools = use(toolsPromise);

  return (
    <div className="max-w-300 mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
      {tools.map((tool) => (
        <ToolsCard key={tool.id} tool={tool}></ToolsCard>
      ))}
    </div>
  );
};

export default Tools;
