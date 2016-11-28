"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var DashboardComponent = (function () {
    function DashboardComponent(element) {
        this.element = element;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var svg = d3.select(this.element.nativeElement.childNodes[0]), margin = { top: 20, right: 20, bottom: 30, left: 40 }, width = +svg.node().getBoundingClientRect().width - margin.left - margin.right, height = +svg.node().getBoundingClientRect().height - margin.top - margin.bottom;
        var x = d3.scaleBand().rangeRound([0, width]).padding(0.1), y = d3.scaleLinear().rangeRound([height, 0]);
        var g = svg.append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
        var data = [
            { letter: "A", frequency: .08167 },
            { letter: "B", frequency: .01492 },
            { letter: "C", frequency: .02782 },
            { letter: "D", frequency: .04253 },
            { letter: "E", frequency: .12702 },
            { letter: "F", frequency: .02288 },
            { letter: "G", frequency: .02015 },
            { letter: "H", frequency: .06094 },
            { letter: "I", frequency: .06966 },
            { letter: "J", frequency: .00153 },
            { letter: "K", frequency: .00772 },
            { letter: "L", frequency: .04025 },
            { letter: "M", frequency: .02406 },
            { letter: "N", frequency: .06749 },
            { letter: "O", frequency: .07507 },
            { letter: "P", frequency: .01929 },
            { letter: "Q", frequency: .00095 },
            { letter: "R", frequency: .05987 },
            { letter: "S", frequency: .06327 },
            { letter: "T", frequency: .09056 },
            { letter: "U", frequency: .02758 },
            { letter: "V", frequency: .00978 },
            { letter: "W", frequency: .02360 },
            { letter: "X", frequency: .00150 },
            { letter: "Y", frequency: .01974 },
            { letter: "Z", frequency: .00074 }
        ];
        x.domain(data.map(function (d) { return d.letter; }));
        y.domain([0, d3.max(data, function (d) { return d.frequency; })]);
        g.append("g")
            .attr("class", "axis axis--x")
            .attr("transform", "translate(0," + height + ")")
            .call(d3.axisBottom(x));
        g.append("g")
            .attr("class", "axis axis--y")
            .call(d3.axisLeft(y).ticks(10, "%"))
            .append("text")
            .attr("transform", "rotate(-90)")
            .attr("y", 6)
            .attr("dy", "0.71em")
            .attr("text-anchor", "end")
            .text("Frequency");
        g.selectAll(".bar")
            .data(data)
            .enter().append("rect")
            .attr("class", "bar")
            .attr("x", function (d) { return x(d.letter); })
            .attr("y", function (d) { return y(d.frequency); })
            .attr("width", x.bandwidth())
            .attr("height", function (d) { return height - y(d.frequency); });
    };
    DashboardComponent = __decorate([
        core_1.Component({
            selector: 'dashboard',
            templateUrl: "./app/dashboard/dashboard.html"
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=dashboard.component.js.map