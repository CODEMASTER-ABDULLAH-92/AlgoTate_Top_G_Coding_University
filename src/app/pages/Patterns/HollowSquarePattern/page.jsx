
import ProblemSolutionPage from "../../../Component/ProblemSolutionPage";
const page = () => {
  return (
    <div>
      <ProblemSolutionPage
        vid={"/videos/newVideo.mp4"}
        problem={{
          title: "Hollow Square Pattern",
          difficulty: "Easy",
          description:
            "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.",
          examples: [
            {
              input: `* * * * * * * * * *
*                 *
*                 *
*                 *
*                 *
*                 *
*                 *
*                 *
*                 *
* * * * * * * * * *`,
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
        codeSolution={`#include <iostream>
 using namespace std;

 int main() {
     int n = 15; // Size of the square box

     for (int row = 0; row < n; row++) {  // Loop for rows
         for (int col = 0; col < n; col++) {  // Loop for columns
            // Print '*' for the first and last row, or first and last column
            if (row == 0 || row == n - 1 || col == 0 || col == n - 1) {
                cout << "* ";
            } else {
                cout << "  ";  // Print space for inner empty area
            }
        }
    }
//         cout << endl;

    return 0;
}`}
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
