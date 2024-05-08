function skillsMember() {
    var member = {};
    member.name = "John";
    member.skills = ["c++", "java", "python"];
    member.showSkills = function () {
        this.skills.forEach(function (el) {
            console.log(this.name + " knows " + el);
        }.bind(this));
    };
    return member;
}