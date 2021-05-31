import * as moment from 'moment';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class DateService {

    getDayDetail() {
      const startData = moment().add(-1, 'day');
        const range = [];
        for (let i = 0; i < 5; i++) {
          const item = {
            name: startData.format('Ha D MMM'),
            value: 0
          };
          startData.add(6, 'hour');
          range.push(item);
        }
        return range;
    }

    getHourDetail() {
      const startData = moment().add(-1, 'hour');
      const range = [];
      for (let i = 0; i <= 6; i++) {
        const item = {
          name: startData.format('HH:mm'),
          value: 0
        };
        startData.add(10, 'minute');
        range.push(item);
      }
      return range;
    }

    getWeekDetail() {
      return [-6, -5, -4, -3, -2, -1, 0].map(item => {
        const cloneData = moment().clone();
        return {
          name: cloneData.add(item, 'day').format('D MMM').toString(),
          value: 0
        };
      });
    }

    getMonthDetail() {
      const startData = moment();
      const range = [];
      for (let i = 0; i < 6; i++) {
        const item = {
          name: startData.format('D MMM'),
          value: 0
        };
        startData.add(-6, 'days');
        range.push(item);
      }
      return range.reverse();
    }

    getYearDetail() {
      const startData = moment().add(-12, 'month');
      const range = [];
      for (let i = 0; i < 13; i++) {
        const item = {
          name: startData.format('MMM YY'),
          value: 0
        };
        startData.add(1, 'month');
        range.push(item);
      }
      return range;
    }
}
