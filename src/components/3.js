import React from "react";

export default function Page4() {
  return (
    <div className="custom-bg flex flex-col items-center justify-center p-6 min-h-screen">
      <div className="custom-bg flex flex-col items-center justify-center font-sans p-6 min-h-screen">
        <div className="w-full max-w-sm">
          <p className="font-poor-story text-center font-semibold text-2xl mt-8 mb-8">
            Since she has 0 USD. So she...
            <br></br>
            <ul className="list-disc pl-5 text-left">
              <li>Interned in Meta</li>
              <li>Became a founding Engineer in an AI startup </li>
              <li>Won Second price in National AI contest</li>
            </ul>
          </p>
          <div class="flex items-center justify-center h-full">
            <img src="/4.png" alt="4" />
          </div>
          <p className="font-poor-story text-center font-semibold text-2xl mt-8 mb-8">
            for some $$. (but she is still quite poor)
          </p>
        </div>
      </div>
    </div>
  );
}
