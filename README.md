# vaco-time
A cli tool made with Node.js to parse an excel timesheet that returns total hours worked.

## Why?

If you've seen the exported timesheet report, you know what I mean ;)  

## Install 
```
$ npm install vaco-time -g 
```

## Usage

1. Login to the bullhorn site and download your timesheet.
2. Run `vaco-time <path-to-file> in your terminal`

*Optionally you can clone this repo and run `node bin/vaco-time <path-to-file>`*

## Example

```
$ vaco-time myTimeSheet.xls

You have worked a total of 500 hours
```

