'use strict';

const title = '======================\n現在持っているタスク一覧\n======================';
const tasklist = [`[内容]机を片付ける、[ジャンル]掃除`,`[内容]牛乳を買う、[ジャンル]買い物`,`[内容]散歩する、[ジャンル]運動`];

const showTasks = () => {
    console.log(title);
    tasklist.forEach((task, index) => console.log(`${index} : ${task}`));
}

const task = () => {
    let task = prompt('タスクを入力してください。');
    let genre = prompt('ジャンルを入力してください。');
    tasklist.push(`[内容]${task}` + `[ジャンル]${genre}`);
    alert('新しいタスクを追加しました。');
    showTasks();
    prompt("「確認,追加,削除,終了」の４つのいずれかを入力してください");
    task();
}

showTasks();
task();
