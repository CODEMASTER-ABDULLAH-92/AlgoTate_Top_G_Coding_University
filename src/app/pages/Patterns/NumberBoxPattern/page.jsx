import ProblemSolutionPage from "../../../Component/ProblemSolutionPage";
import React from "react";

const page = () => {
  return (
    <div>
      <ProblemSolutionPage
        vid={"/videos/newVideo.mp4"}
        problem={{
          title: "Number Box Pattern",
          difficulty: "Easy",
          description:
            "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.",
          examples: [
            {
              input: `4 4 4 4 4 4 4 
4 3 3 3 3 3 4 
4 3 2 2 2 3 4 
4 3 2 1 2 3 4 
4 3 2 2 2 3 4 
4 3 3 3 3 3 4 
4 4 4 4 4 4 4`,
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
        codeSolution={`#include<iostream>
using namespace std;
int main(){
 for(int row = 1; row <=7; row++){
    for(int col = 1; col<=7; col++){
        if (row == 1 || row == 7 || col == 1  ||  col == 7)
        {
            cout<<"4 ";
        }
        else if(row == 2 || row == 6 || col == 2  ||  col == 6)
        {
            cout<<"3 ";
        }
        else if(row == 3 || row == 5 || col == 3  ||  col == 5)
        {
            cout<<"2 ";
        }
        else{
            cout<<"1 ";
        }
    }
    cout<<endl;
 }   
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
