import ProblemSolutionPage from "../../../Component/ProblemSolutionPage";

const page = () => {
  return (
    <div>
      <ProblemSolutionPage
        vid={"/videos/newVideo.mp4"}
        problem={{
          title: "Binary Number Triangle Pattern",
          difficulty: "Easy",
          description:
            "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.",
          examples: [
            {
              input: `1 
0 1 
1 0 1 
0 1 0 1 
1 0 1 0 1`,
              output: "[0,1]",
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
        codeSolution={
          `#include <iostream>
using namespace std;

 int main() {
     int start;
     for (int row = 1; row <= 5; row++) {
//         // Determine the starting value based on the row number
         if (row % 2 == 0) {
             start = 0; // Start with 0 for even rows
         } else {
             start = 1; // Start with 1 for odd rows
         }

         for (int col = 1; col <= row; col++) {
             cout << start<<" "; // Print the current value
             start = 1 - start; // Toggle between 1 and 0
         }
         cout << endl; // Move to the next row
     }

    return 0;
}`
        }
        approach={[{
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
        }]}
      />
    </div>
  );
};

export default page;
