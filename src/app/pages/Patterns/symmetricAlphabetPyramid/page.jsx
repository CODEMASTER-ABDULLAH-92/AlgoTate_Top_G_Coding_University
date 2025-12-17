

import ProblemSolutionPage from "../../../Component/ProblemSolutionPage";
import React from "react";

const page = () => {
  return (
    <div>
      <ProblemSolutionPage
        vid={"/videos/newVideo.mp4"}
        problem={{
          title: "Symmetric Alphabet Pyramid",
          difficulty: "Easy",
          description:
            "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.",
          examples: [
            {
              input:`A
        A B A
      A B C B A   
    A B C D C B A`,

              explanation: "Because nums[0] + nums[1] == 9, we return [0, 1].",
            },
          ],
        }}
        companies={[
          { name: "Google", frequency: "85%", logo: "G" },
          { name: "Amazon", frequency: "78%", logo: "A" },
          { name: "Microsoft", frequency: "72%", logo: "M" },
          { name: "Apple", frequency: "65%", logo: "A" },
          { name: "Facebook", frequency: "63%", logo: "f" },
          { name: "Uber", frequency: "58%", logo: "U" },
        ]}
        codeSolution={`function twoSum(nums: number[], target: number): number[] {
  const map = new Map<number, number>();
  
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    
    if (map.has(complement)) {
      return [map.get(complement)!, i];
    }
    
    map.set(nums[i], i);
  }
  
  return [];
}`}
        approach={{
          title: "Hash Map Approach",
          steps: [
            "We use a hash map to store the numbers we've encountered along with their indices.",
            "For each number, calculate the complement (target - current number).",
            "Check if the complement exists in the hash map.",
            "If found, return the current index and the complement's index.",
            "If not found, add the current number and its index to the hash map.",
          ],
          complexity: {
            time: "O(n)",
            space: "O(n)",
          },
        }}
      />
    </div>
  );
};

export default page;
