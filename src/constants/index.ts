import { Clock, Code2, Calendar, Users } from "lucide-react";

export const INTERVIEW_CATEGORY = [
  { id: "upcoming", title: "Upcoming Interviews", variant: "outline" },
  { id: "completed", title: "Completed", variant: "secondary" },
  { id: "succeeded", title: "Succeeded", variant: "default" },
  { id: "failed", title: "Failed", variant: "destructive" },
] as const;

export const TIME_SLOTS = [
  "09:00",
  "09:30",
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "12:00",
  "12:30",
  "13:00",
  "13:30",
  "14:00",
  "14:30",
  "15:00",
  "15:30",
  "16:00",
  "16:30",
  "17:00",
  "17:30",
  "18:00",
  "18:30",
  "19:00",
  "19:30",
  "20:00",

];

export const QUICK_ACTIONS = [
  {
    icon: Code2,
    title: "New Call",
    description: "Start an instant call",
    color: "primary",
    gradient: "from-primary/10 via-primary/5 to-transparent",
  },
  {
    icon: Users,
    title: "Join Interview",
    description: "Enter via invitation link",
    color: "purple-500",
    gradient: "from-purple-500/10 via-purple-500/5 to-transparent",
  },
  {
    icon: Calendar,
    title: "Schedule",
    description: "Plan upcoming interviews",
    color: "blue-500",
    gradient: "from-blue-500/10 via-blue-500/5 to-transparent",
  },
  {
    icon: Clock,
    title: "Recordings",
    description: "Access past interviews",
    color: "orange-500",
    gradient: "from-orange-500/10 via-orange-500/5 to-transparent",
  },
];

export const CODING_QUESTIONS: CodeQuestion[] = [
  {
    id: "two-sum",
    title: "Two Sum",
    description:
      "Given an array of integers `nums` and an integer `target`, return indices of the two numbers in the array such that they add up to `target`.",
    examples: [
      {
        input: "nums = [2,7,11,15], target = 9",
        output: "[0,1]",
        explanation: "Because nums[0] + nums[1] == 9, we return [0, 1]",
      },
      {
        input: "nums = [3,2,4], target = 6",
        output: "[1,2]",
      },
    ],
    starterCode: {
      cpp: `#include <vector>
using namespace std;

vector<int> twoSum(vector<int>& nums, int target) {
    // Write your solution here
}`,
      python: `def two_sum(nums, target):
    # Write your solution here
    pass`,
      java: `class Solution {
    public int[] twoSum(int[] nums, int target) {
        // Write your solution here
        
    }
}`,
    },
    constraints: [
      "2 ≤ nums.length ≤ 104",
      "-109 ≤ nums[i] ≤ 109",
      "-109 ≤ target ≤ 109",
      "Only one valid answer exists.",
    ],
  },
  {
    id: "reverse-string",
    title: "Reverse String",
    description:
      "Write a function that reverses a string. The input string is given as an array of characters `s`.",
    examples: [
      {
        input: 's = ["h","e","l","l","o"]',
        output: '["o","l","l","e","h"]',
      },
      {
        input: 's = ["H","a","n","n","a","h"]',
        output: '["h","a","n","n","a","H"]',
      },
    ],
    starterCode: {
      cpp: `#include <vector>
using namespace std;

void reverseString(vector<char>& s) {
    // Write your solution here
}`,
      python: `def reverse_string(s):
    # Write your solution here
    pass`,
      java: `class Solution {
    public void reverseString(char[] s) {
        // Write your solution here
        
    }
}`,
    },
  },
  {
    id: "palindrome-number",
    title: "Palindrome Number",
    description:
      "Given an integer `x`, return `true` if `x` is a palindrome, and `false` otherwise.",
    examples: [
      {
        input: "x = 121",
        output: "true",
        explanation: "121 reads as 121 from left to right and from right to left.",
      },
      {
        input: "x = -121",
        output: "false",
        explanation:
          "From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.",
      },
    ],
    starterCode: {
      cpp: `#include <iostream>
using namespace std;

bool isPalindrome(int x) {
    // Write your solution here
}`,
      python: `def is_palindrome(x):
    # Write your solution here
    pass`,
      java: `class Solution {
    public boolean isPalindrome(int x) {
        // Write your solution here
        
    }
}`,
    },
  },
  {
    id: "trapping-rain-water",
    title: "Trapping Rain Water",
    description:
      "Given `n` non-negative integers representing an elevation map where the width of each bar is `1`, compute how much water it can trap after raining.",
    examples: [
      {
        input: "height = [0,1,0,2,1,0,1,3,2,1,2,1]",
        output: "6",
        explanation: "The above elevation map is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water are being trapped."
      },
      {
        input: "height = [4,2,0,3,2,5]",
        output: "9"
      }
    ],
    starterCode: {
      cpp: `#include <vector>
    using namespace std;

    int trap(vector<int>& height) {
        // Write your solution here
    }`,
        python: `def trap(height):
      # Write your solution here
      pass`,
        java: `class Solution {
      public int trap(int[] height) {
          // Write your solution here
          
      }
  }`
      },
      constraints: [
        "n == height.length",
        "1 <= n <= 2 * 10^4",
        "0 <= height[i] <= 10^5"
      ],
  },
  {
    id: "regular-expression-matching",
    title: "Regular Expression Matching",
    description:
      "Given an input string `s` and a pattern `p`, implement regular expression matching with support for `'.'` and `'*'` where:\n* `'.'` Matches any single character.\n* `'*'` Matches zero or more of the preceding element.\nThe matching should cover the **entire** input string (not partial).",
    examples: [
      {
        input: "s = \"aa\", p = \"a\"",
        output: "false",
        explanation: "\"a\" does not match the entire string \"aa\"."
      },
      {
        input: "s = \"aa\", p = \"a*\"",
        output: "true",
        explanation: "'*' means zero or more of the preceding element, 'a'. Therefore, by repeating 'a' once, it becomes \"aa\"."
      },
      {
        input: "s = \"ab\", p = \".*\"",
        output: "true",
        explanation: "\".*\" means \"zero or more (*) of any character (.)\"."
      }
    ],
    starterCode: {
      cpp: `#include <string>
using namespace std;

bool isMatch(string s, string p) {
    // Write your solution here
}`,
      python: `def is_match(s, p):
    # Write your solution here
    pass`,
      java: `class Solution {
    public boolean isMatch(String s, String p) {
        // Write your solution here
        
    }
}`
    },
    constraints: [
      "1 <= s.length <= 20",
      "1 <= p.length <= 20",
      "s contains only lowercase English letters.",
      "p contains only lowercase English letters, '.', and '*'.",
      "It is guaranteed for each appearance of the character '*', there will be a previous valid character to match."
    ],
  },
  {
    id: "frog-jump",
    title: "Frog Jump",
    description:
      "A frog is crossing a river. The river is divided into some number of units, and at each unit, there may or may not exist a stone. The frog can jump on a stone, but it must not jump into the water.\nGiven a list of `stones` positions (in units) in sorted **ascending order**, determine if the frog can cross the river by landing on the last stone. Initially, the frog is on the first stone and assumes the first jump must be `1` unit.\nIf the frog's last jump was `k` units, its next jump must be either `k - 1`, `k`, or `k + 1` units. The frog can only jump in the forward direction.",
    examples: [
      {
        input: "stones = [0,1,3,5,6,8,12,17]",
        output: "true",
        explanation: "The frog can jump to the last stone by jumping 1 unit to the 2nd stone, then 2 units to the 3rd stone, then 2 units to the 4th stone, then 3 units to the 6th stone, 4 units to the 7th stone, and 5 units to the 8th stone."
      },
      {
        input: "stones = [0,1,2,3,4,8,9,11]",
        output: "false",
        explanation: "There is no way to jump to the last stone as the gap between the 5th and 6th stone is too large."
      }
    ],
    starterCode: {
      cpp: `#include <vector>
using namespace std;

bool canCross(vector<int>& stones) {
    // Write your solution here
}`,
      python: `def can_cross(stones):
    # Write your solution here
    pass`,
      java: `class Solution {
    public boolean canCross(int[] stones) {
        // Write your solution here
        
    }
}`
    },
    constraints: [
      "2 <= stones.length <= 2000",
      "0 <= stones[i] <= 2^31 - 1",
      "stones[0] == 0",
      "stones is sorted in a strictly increasing order."
    ],
  },
  {
    id: "concatenated-words",
    title: "Concatenated Words",
    description:
      "Given an array of strings `words` (**without duplicates**), return *all the **concatenated words** in the given list of* `words`.\nA **concatenated word** is defined as a string that is comprised entirely of at least two shorter words (not necessarily distinct) in the given array.",
    examples: [
      {
        input: "words = [\"cat\",\"cats\",\"catsdogcats\",\"dog\",\"dogcatsdog\",\"hippopotamuses\",\"rat\",\"ratcatdogcat\"]",
        output: "[\"catsdogcats\",\"dogcatsdog\",\"ratcatdogcat\"]",
        explanation: "\"catsdogcats\" can be concatenated by \"cats\", \"dog\" and \"cats\"; \n\"dogcatsdog\" can be concatenated by \"dog\", \"cats\" and \"dog\"; \n\"ratcatdogcat\" can be concatenated by \"rat\", \"cat\", \"dog\" and \"cat\"."
      },
      {
        input: "words = [\"cat\",\"dog\",\"catdog\"]",
        output: "[\"catdog\"]"
      }
    ],
    starterCode: {
      cpp: `#include <vector>
#include <string>
using namespace std;

vector<string> findAllConcatenatedWordsInADict(vector<string>& words) {
    // Write your solution here
}`,
      python: `def find_all_concatenated_words_in_a_dict(words):
    # Write your solution here
    pass`,
      java: `class Solution {
    public List<String> findAllConcatenatedWordsInADict(String[] words) {
        // Write your solution here
        
    }
}`
    },
    constraints: [
      "1 <= words.length <= 10^4",
      "1 <= words[i].length <= 30",
      "words[i] consists of only lowercase English letters.",
      "All the strings of words are unique.",
      "1 <= sum(words[i].length) <= 10^5"
    ],
  },
  {
    id: "top-k-frequent-elements",
    title: "Top K Frequent Elements",
    description:
      "Given an integer array `nums` and an integer `k`, return *the* `k` *most frequent elements*. You may return the answer in **any order**.",
    examples: [
      {
        input: "nums = [1,1,1,2,2,3], k = 2",
        output: "[1,2]"
      },
      {
        input: "nums = [1], k = 1",
        output: "[1]"
      }
    ],
    starterCode: {
      cpp: `#include <vector>
using namespace std;

vector<int> topKFrequent(vector<int>& nums, int k) {
    // Write your solution here
}`,
      python: `def top_k_frequent(nums, k):
    # Write your solution here
    pass`,
      java: `class Solution {
    public int[] topKFrequent(int[] nums, int k) {
        // Write your solution here
        
    }
}`
    },
    constraints: [
      "1 <= nums.length <= 10^5",
      "-10^4 <= nums[i] <= 10^4",
      "k is in the range [1, the number of unique elements in the array].",
      "It is guaranteed that the answer is unique."
    ],
  },
  {
    id: "merge-k-sorted-lists",
    title: "Merge k Sorted Lists",
    description:
      "You are given an array of `k` linked-lists `lists`, each linked-list is sorted in ascending order.\n*Merge all the linked-lists into one sorted linked-list and return it.*",
    examples: [
      {
        input: "lists = [[1,4,5],[1,3,4],[2,6]]",
        output: "[1,1,2,3,4,4,5,6]",
        explanation: "The linked-lists are:\n[\n  1->4->5,\n  1->3->4,\n  2->6\n]\nmerging them into one sorted list:\n1->1->2->3->4->4->5->6"
      },
      {
        input: "lists = []",
        output: "[]"
      },
      {
        input: "lists = [[]]",
        output: "[]"
      }
    ],
    starterCode: {
      cpp: `/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */
class Solution {
public:
    ListNode* mergeKLists(vector<ListNode*>& lists) {
        // Write your solution here
    }
};`,
      python: `# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def mergeKLists(self, lists: List[ListNode]) -> ListNode:
        # Write your solution here
        pass`,
      java: `/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public ListNode mergeKLists(ListNode[] lists) {
        // Write your solution here
        
    }
}`
    },
    constraints: [
      "k == lists.length",
      "0 <= k <= 10^4",
      "0 <= lists[i].length <= 500",
      "-10^4 <= lists[i][j] <= 10^4",
      "lists[i] is sorted in ascending order.",
      "The sum of lists[i].length will not exceed 10^4."
    ],
  },
  {
    id: "unique-binary-search-trees",
    title: "Unique Binary Search Trees",
    description:
      "Given an integer `n`, return *the number of structurally unique **BST's** (binary search trees) which has exactly* `n` *nodes of unique values from* `1` *to* `n`.",
    examples: [
      {
        input: "n = 3",
        output: "5",
        explanation: "There are 5 structurally unique BST's with 3 nodes (values 1-3)."
      },
      {
        input: "n = 1",
        output: "1"
      }
    ],
    starterCode: {
      cpp: `class Solution {
public:
    int numTrees(int n) {
        // Write your solution here
    }
};`,
      python: `def num_trees(n):
    # Write your solution here
    pass`,
      java: `class Solution {
    public int numTrees(int n) {
        // Write your solution here
        
    }
}`
    },
    constraints: [
      "1 <= n <= 19"
    ],
  },
  {
    id: "number-of-ways-to-reorder-array-to-get-same-bst",
    title: "Number of Ways to Reorder Array to Get Same BST",
    description:
      "Given an array `nums` that represents a permutation of integers from `1` to `n`. We are going to construct a binary search tree (BST) by inserting the elements of `nums` in order into an initially empty BST. Find the number of different ways to reorder `nums` so that the constructed BST is identical to that formed from the original array `nums`.\n* For example, given `nums = [2,1,3]`, we will have 2 as the root, 1 as a left child, and 3 as a right child. The array `[2,3,1]` also yields the same BST but `[3,2,1]` yields a different BST.\nReturn *the number of ways to reorder* `nums` *such that the BST formed is identical to the original BST formed from* `nums`.\nSince the answer may be very large, **return it modulo** `10^9 + 7`.",
    examples: [
      {
        input: "nums = [2,1,3]",
        output: "1",
        explanation: "We can reorder nums to be [2,3,1] which will yield the same BST. There are no other ways to reorder nums which will yield the same BST."
      },
      {
        input: "nums = [3,4,5,1,2]",
        output: "5",
        explanation: "The following 5 arrays will yield the same BST: \n[3,1,2,4,5]\n[3,1,4,2,5]\n[3,1,4,5,2]\n[3,4,1,2,5]\n[3,4,1,5,2]"
      },
      {
        input: "nums = [1,2,3]",
        output: "0",
        explanation: "There are no other orderings of nums that will yield the same BST."
      }
    ],
    starterCode: {
      cpp: `#include <vector>
using namespace std;

class Solution {
public:
    int numOfWays(vector<int>& nums) {
        // Write your solution here
    }
};`,
      python: `def num_of_ways(nums):
    # Write your solution here
    pass`,
      java: `class Solution {
    public int numOfWays(int[] nums) {
        // Write your solution here
        
    }
}`
    },
    constraints: [
      "1 <= nums.length <= 1000",
      "1 <= nums[i] <= nums.length",
      "All integers in nums are distinct."
    ],
  },


];

export const LANGUAGES = [
  { id: "cpp", name: "C++", icon: "/cpp.png" },
  { id: "python", name: "Python", icon: "/python.png" },
  { id: "java", name: "Java", icon: "/java.png" },
] as const;

export interface CodeQuestion {
  id: string;
  title: string;
  description: string;
  examples: Array<{
    input: string;
    output: string;
    explanation?: string;
  }>;
  starterCode: {
    cpp: string;
    python: string;
    java: string;
  };
  constraints?: string[];
}

export type QuickActionType = (typeof QUICK_ACTIONS)[number];