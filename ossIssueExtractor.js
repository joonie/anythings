var rows = $$("div.Box-row");
var logs = [];
for (each in rows) {
    var row = rows[each];

    var issueLink = $("a", row);
    console.log(issueLink.text);
}