// View the full problem and run the test cases at:
//  https://leetcode.com/problems/course-schedule/

function canFinish(numCourses, prerequisites) {
    let prereq = createGraph(prerequisites);
    let count = Object.keys(prereq.length);

    let completedCourses = new Set();

    let loop = true;
    
    while (loop) {
        loop = false;
        for (let course in prereq) {
            let allPrereqComplete = prereq[course].every((pre) => completedCourses.has(pre));
            if (!completedCourses.has(course) && allPrereqComplete) {
                completedCourses.add(course);
                loop = true;
            }
        }
    }
    return completedCourses.size === count;
}

function createGraph(prerequisites) {
    let graph = {};

    prerequisites.forEach((prereq) => {
        let [course, pre] = prereq;

        if (graph[course]) {
            graph[course].push(pre);
        }else{
            graph[course] = [pre];
        }

        if (!graph[pre]) {
            graph[pre] = [];
        }
    })
    return graph;
}