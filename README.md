##<code>date-range</code> Component Documentation

An ember date-range component

This component requires [Bootstrap Datepicker](https://github.com/eternicode/bootstrap-datepicker)
and jquery.

The component links two datepicker inputs. When the first datepicker changes,
the second datepicker will re-adjust to have the minimum start date to be
the date selected from the first datepicker.

If date selected of the first datepicker is greater than the date selected of the
second datepicker, the second datepicker will reset it's value. Otherwise it will stay the same.

###Usage

 - Place the `date_range_component.js` file from the *source/components* directory inside of your components folder.
 - Place the `date-range.hbs` file from the *source/templates/compoents* directory inside your */templates/compoents* folder.
 - In your ember template:
```
{{date-range
        startDate=startDateValue
        endDate=endDateValue
        startLabel="Start Date"
        endLabel="End Date"
        separator="To"}}
```

## Reference

| Attribute | Value | Description |
| :-------- | :---: | :---------- |
| startDate | <code>null</code><br/><code>string</code> | property that binds to the value of the first datepicker in your controller |
| endDate |  <code>null</code><br/><code>string</code> | property that binds to the value of the second datepicker in your controller |
| startLabel | <code>string</code> | The label for the first datepicker |
| endLabel | <code>string</code> | The label for the second datepicker |
| separator | <code>string</code> | a separator label in-between the two datepickers|
