'use client';

import { useState } from 'react';

export default function Home() {
  const [inputValue, setInputValue] = useState('');

  const handleShowAlert = () => {
    alert(inputValue || '입력된 텍스트가 없습니다.');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      {/* 메인 컨텐츠 */}
      <main className="flex-1 flex flex-col items-center justify-center w-full max-w-3xl px-4">
        {/* 메인 질문 */}
        <h1 className="text-3xl sm:text-4xl font-medium text-gray-800 mb-12 text-center">
          지금 무슨 생각을 하시나요?
        </h1>

        {/* 입력 필드 */}
        <div className="w-full max-w-2xl">
          <div className="flex items-center gap-3 px-4 py-3 border border-gray-200 rounded-full shadow-sm hover:shadow-md transition-shadow bg-white">
            {/* 플러스 아이콘 */}
            <button className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors">
              <svg
                className="w-5 h-5 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            </button>

            {/* 입력 필드 */}
            <input
              type="text"
              placeholder="무엇이든 물어보세요"
              className="flex-1 outline-none text-gray-700 placeholder-gray-400 bg-transparent"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />

            {/* 오른쪽 아이콘들 */}
            <div className="flex items-center gap-2 flex-shrink-0">
              {/* 마이크 아이콘 */}
              <button
                className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded-lg transition-colors"
                onClick={handleShowAlert}
              >
                <svg
                  className="w-5 h-5 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                </svg>
              </button>

              {/* 사운드 웨이브 아이콘 */}
              <button className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded-lg transition-colors">
                <svg
                  className="w-5 h-5 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6m0 0a2 2 0 012-2h2a2 2 0 012 2v13m-6-6h6" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12v7m14-7v7" />
                </svg>
              </button>
            </div>
          </div>

          {/* 입력 필드 하단 텍스트 */}
          <p className="text-xs text-gray-500 text-center mt-4">
            ChatGPT는 실수를 할 수 있습니다. 중요한 정보는 확인하세요.
          </p>
        </div>
      </main>

      {/* 푸터 */}
      <footer className="w-full py-4 px-4 text-center">
        <p className="text-sm text-gray-500">
          ChatGPT Clone · Made with Next.js
        </p>
      </footer>
    </div>
  );
}
